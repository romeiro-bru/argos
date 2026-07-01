import { PulseLoading } from "../../components/pulseLoading";

export function AuthFormSkeleton({ showName }: { showName: boolean }) {
  return (
    <>
      <PulseLoading label="E-mail:" height={35} width={170} />
      {showName && <PulseLoading label="Nome:" height={35} width={170} />}
      <PulseLoading label="Senha:" height={35} width={170} />
    </>
  );
}