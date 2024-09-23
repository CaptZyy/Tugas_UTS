import { useNavigate } from "react-router-dom";

const Content = () => {
  return (
    <div className="w-full h-full flex justify-center ">
    <div className=" mt-14 max-w-[1920px] w-full">
      <div className="w-full h-[600px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmV8ZW58MHx8MHx8fDA%3D')]">
            <div className="h-full w-full items-center flex justify-center text-white text-5xl font-serif font-bold">
                <h1>WELCOME TO CHOW & CHUG</h1>
            </div>
      </div>
      <div className="w-full h-28 flex items-center " id="">
        <div className="container mx-auto flex justify-center text-4xl font-bold font-serif ">
            <h1>Menu</h1>
        </div>
      </div>
      <div className="h-[1519px] w-full mt-2 flex justify-center ">
        <div className="h-full flex flex-wrap justify-center gap-20">
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
          <div className=" w-[353px] h-[278px] bg-cover bg-center ">
                <div className="w-full h-[60%] flex flex-col gap-2   text-xl items-center">
                    <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <h1>Brown Sugar Coffee</h1>
                    <h1>25.000</h1>
                    <button className="border-2 border-black rounded-lg w-[50%] hover:bg-orange-200">Buy Now </button>
                </div>
          </div>
   
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content;
