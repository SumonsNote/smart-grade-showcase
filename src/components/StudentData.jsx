import { getAvatar } from "../utils/avatar-util";

export default function StudentData({ id, avatar, name, score, percentage }) {
  return (
    <tr className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{id}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8 ring-2 ring-yellow-500 rounded-full"
            src={getAvatar(`${avatar}`)}
            width="32"
            height="32"
            alt={name}
          />
          <span className="whitespace-nowrap">{name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{score}</td>
      <td className="p-5 text-sm md:text-xl text-center">{percentage}</td>
    </tr>
  );
}
