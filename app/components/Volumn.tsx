import Image from "next/image";

interface VolumnProps {
  toggleMute: any,
  isMuted: boolean
}
function Volumn({ toggleMute, isMuted }: VolumnProps) {
  return (
    <button onClick={toggleMute} className=" absolute bottom-24 z-50 right-32">
      {!isMuted && < Image alt="sss" width={999} height={999} src='/home/volumnOn.svg' className="w-32 lg:w-12 h-32 lg:h-12 object-cover" />}
      {isMuted && <Image alt="sss" width={999} height={999} src='/home/volumnOff.svg' className="w-32 lg:w-12 h-32 lg:h-12 object-cover" />}
    </button>

  );
}

export default Volumn;