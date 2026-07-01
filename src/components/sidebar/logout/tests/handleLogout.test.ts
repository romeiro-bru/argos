import type { Mock } from "vitest";
import { supabase } from "../../../../../supabase-client";
import { handleLogout } from "../useLogout";
import type { Dispatch, SetStateAction } from "react";

vi.mock("../../../../../supabase-client", () => ({
  supabase: {
    auth: {
      signOut: vi.fn().mockResolvedValue({ error: null }),
    },
  },
}));

describe("handleLogout", () => {
  let mockNavigate: Mock;
  let mockSetIsLoggingOut: Mock<Dispatch<SetStateAction<boolean>>>;
  let mockOnError: Mock<(error: unknown) => void>;

  beforeEach(() => {
    mockNavigate = vi.fn();
    mockSetIsLoggingOut = vi.fn();
    mockOnError = vi.fn();
    vi.clearAllMocks();
  });

  it("Should logout and redirect to landing page after success", async () => {
    vi.mocked(supabase.auth.signOut).mockResolvedValue({ error: null });

    await handleLogout({
      setIsLoggingOut: mockSetIsLoggingOut,
      navigate: mockNavigate,
      onError: mockOnError,
    });

    expect(mockSetIsLoggingOut).toHaveBeenCalledWith(true);
    expect(supabase.auth.signOut).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(mockSetIsLoggingOut).toHaveBeenCalledWith(false);
  });

  it("Should call onError if signOut returns an error", async () => {
    const errorMessage = "Erro de logout";

    vi.mocked(supabase).auth.signOut = vi.fn().mockResolvedValue({
      error: { message: errorMessage },
    });

    await handleLogout({
      setIsLoggingOut: mockSetIsLoggingOut,
      navigate: mockNavigate,
      onError: mockOnError,
    });

    expect(mockOnError).toHaveBeenCalledWith(errorMessage);
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockSetIsLoggingOut).toHaveBeenLastCalledWith(false);
  });

  it("Should call onError if signOut throws an unexpected error", async () => {
    vi.mocked(supabase).auth.signOut = vi
      .fn()
      .mockRejectedValue(new Error("Network error"));

    await handleLogout({
      setIsLoggingOut: mockSetIsLoggingOut,
      navigate: mockNavigate,
      onError: mockOnError,
    });

    expect(mockOnError).toHaveBeenCalledWith("Network error");
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockSetIsLoggingOut).toHaveBeenLastCalledWith(false);
  });
});
