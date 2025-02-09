import { MyTestComponent } from "@repo/test"

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="p-10 bg-indigo-300">Local component in app</div>
      <MyTestComponent />
    </div>
  );
}
