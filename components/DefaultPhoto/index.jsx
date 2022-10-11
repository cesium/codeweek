export default function DefaultPhoto({ name }) {
  return (
    <span className="inline-flex justify-center items-center w-10 h-10 bg-gray2 rounded-full">
      <span className="text-md font-medium leading-none text-white">
        {name.split(" ").shift().charAt(0) +
          name.split(" ").pop().charAt(0).toUpperCase()}
      </span>
    </span>
  );
}
