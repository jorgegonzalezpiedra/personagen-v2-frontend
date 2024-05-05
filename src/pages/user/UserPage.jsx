import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="flex xl:flex-row sm:max-xl:items-center flex-col justify-center items-start mt-5">
      <div
        className="flex flex-col border-2 border-black overflow-hidden p-8
      rounded-xl shadow-large bg-yellow-200 w-[500px] mr-5 sm:max-xl:mt-5"
      >
        <div className="flex flex-row justify-center">
          <h2 className="text-black font-bold text-3xl">
            ¡Estamos de reformas!
          </h2>
        </div>
        <div className="px-6 py-8 sm:p-10 sm:pt-3 sm:pb-6">
          <div className="items-center w-full justify-center flex flex-col text-left">
            <div className="mt-2">
              <span className="text-black tracking-tight text-4xl">
                La página web se está poniendo guapa, ¡Vuelve a visitarnos
                pronto!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserPage;
