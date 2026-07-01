import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import type { Mock } from "vitest";
import { useLogout } from "../useLogout";
import { supabase } from "../../../../../supabase-client";
import { act } from "react";

vi.mock("../../../../../supabase-client", () => ({
  supabase: {
    auth: {
      signOut: vi.fn().mockResolvedValue({ error: null }),
    },
  },
}));

const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("useLogout", () => {
  let mockOnError: Mock<(message: string) => void>;

  beforeEach(() => {
    mockOnError = vi.fn();
    vi.clearAllMocks();
  });

  it("Should return isLoggingOut as false initially", () => {
    const { result } = renderHook(() => useLogout(mockOnError));

    expect(result.current.isLoggingOut).toBe(false);
  });

  it("Should not call onError on successful logout", async () => {
    vi.mocked(supabase.auth.signOut).mockResolvedValue({ error: null });

    const { result } = renderHook(() => useLogout(mockOnError));

    await act(async () => {
      await result.current.logout();
    });

    expect(mockOnError).not.toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(result.current.isLoggingOut).toBe(false);
  });

  it("Should logout and redirect to landing page after success", async () => {
    vi.mocked(supabase.auth.signOut).mockResolvedValue({ error: null });

    const { result } = renderHook(() => useLogout(mockOnError));

    await act(async () => {
      await result.current.logout();
    });

    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(result.current.isLoggingOut).toBe(false);
  });

  it("Should call onError if signOut returns an error", async () => {
    const errorMessage = "Erro de logout";
    vi.mocked(supabase.auth.signOut).mockResolvedValue({
      error: { message: errorMessage } as any,
    });

    const { result } = renderHook(() => useLogout(mockOnError));

    await act(async () => {
      await result.current.logout();
    });

    expect(mockOnError).toHaveBeenCalledWith(errorMessage);
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(result.current.isLoggingOut).toBe(false);
  });

  it("Should call onError with default message if error.message is undefined", async () => {
    vi.mocked(supabase.auth.signOut).mockResolvedValue({
      error: {} as any,
    });

    const { result } = renderHook(() => useLogout(mockOnError));

    await act(async () => {
      await result.current.logout();
    });

    expect(mockOnError).toHaveBeenCalledWith(
      "Erro ao fazer logout. Tente novamente.",
    );
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
