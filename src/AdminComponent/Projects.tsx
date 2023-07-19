import { useEffect, useState } from "react";
import promage from "../assets/images/hero-img-small.jpeg";
import { customFetch } from "../utils/axios";

interface ProjectData {
  data: Array<any>; // Replace 'any' with the appropriate type for your project data
}

interface ProjectProps {
  id: number;
  client: string;
  description: string;
  name: string;
  image: string;
  url: string;
}
const Projects = () => {
  const [info, setInfo] = useState<ProjectData>({ data: [] });
  const [loading, setLoading] = useState(false)

  const getProjects = async () => {
    try {
        setLoading(true)
      const response = await customFetch.get("project");
      setInfo(response.data);
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false)
    }
  };
  
  useEffect(() => {
    getProjects();
  }, []);


  return (
    <div className="flex flex-wrap justify-between h-[680px] overflow-auto bg-[#243a52] w-[48%] p-5 rounded-md">
        {
            loading&& <h1>Loading...</h1>
        }
      {info.data &&
        info.data.map((item: ProjectProps) => (
          <div
            key={item.id}
            className=" bg-[rgb(129,168,205)] mb-3 flex items-center  p-5 rounded-lg w-full h-[250px]"
          >
            <div className="">
              <img src={promage} alt="" />
            </div>
            <div className="ml-5">
              <p className="font-semibold text-[white] capitalize text-[20px]">
                name:
                <span className="font-normal text-[18px]">{item.name}</span>
              </p>
              <p className="font-semibold text-[white] capitalize text-[20px]">
                client:{" "}
                <span className="font-normal text-[18px]">{item.client}</span>
              </p>
              <p className="font-semibold text-[white] capitalize text-[20px]">
                description:
                <span className="font-normal text-[18px]">
                  {item.description}
                </span>
              </p>
              <p className="font-semibold text-[white] capitalize text-[20px]">
                url: <span className="font-normal text-[18px]">{item.url}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
