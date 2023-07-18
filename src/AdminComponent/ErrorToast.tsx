
interface ErrorProps {
 title:string
 paragraph:string
}

export const ErrorToast = ({ title, paragraph  }:ErrorProps) => {
    return (
      <section className="mx-auto mt-[48px] flex w-[422px] gap-2 rounded-lg border border-error bg-[#FDF4F4] py-3 pl-4">
        <div className=" h-6 w-6 rounded-full">
          {/* <img src={Error} alt="error icon" /> */}
        </div>
        <div className="flex flex-col gap-2 text-base font-normal leading-4">
          <p className="text-error">{title}</p>
          <p className="text-gray">{paragraph}</p>
        </div>
      </section>
    );
  };
  