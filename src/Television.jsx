import { ContextProvider } from "./context/Context";
import { ContentPage } from "./components/ContentPage";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";

export const Television = () => {
  document.title = "Movies-Verse | Series";
  return (
    <div className="w-full h-[80%]">
      <ContextProvider>
        <NavBar />
        <h1 className=" text-[#eee] w-[80%] m-auto text-center mb-6 text-[40px] mt-20">
          Lo más popular en la Televisión
        </h1>
        <div className="flex gap-1 w-[80%] m-auto flex-col md:flex-row md:justify-between md:items-start justify-center items-center">
          <SideBar typeOfList="tv" />
          <section className="bg-[#1d2640] w-full m-auto rounded-lg">
            <ContentPage typeOfList="tv" />
          </section>
        </div>
      </ContextProvider>
    </div>
  );
};
