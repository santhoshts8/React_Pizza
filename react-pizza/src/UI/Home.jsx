import User from "../features/User/User";
function Home() {
  return (
    <div className="mt-24">
      <p className="text-center text-2xl font-semibold text-stone-700">
        The best pizza.
        <br />
        <span className="text-yellow-600">
          Straight out of the oven, straight to you.
        </span>
      </p>
      <div className="mt-8 text-center">
        <p className="mb-2 text-lg font-semibold tracking-wide text-red-800">
          👋 Welcome! Please start by telling your name
        </p>

        <User />
      </div>
    </div>
  );
}

export default Home;
