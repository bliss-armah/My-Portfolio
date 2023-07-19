import AdminForm from "../AdminComponent/AdminForm";
import Projects from "../AdminComponent/Projects";




const AdminPage = () => {
  return (
  <div className="h-screen flex justify-between items-center bg-slate-600 p-16 ">
    <AdminForm/>
    <Projects/>
  </div>
  );
};

export default AdminPage;
