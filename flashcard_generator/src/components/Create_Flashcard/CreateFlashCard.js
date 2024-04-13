import React from "react";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../../Redux/flashcardsSlice";
import TermCard from './TermCard'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFileUpload } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

const CreateFlashCard = () => {
  const dispatch = useDispatch();

  const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

  const imgError = (val) => {
    toast.warn(val, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const initialValues = {
    groupName: "",
    uploadimage: null,
    description: "",
    terms: [{ title: "", definition: "", term_uploadimage: null }],
  };

  const validationSchema = Yup.object({
    groupName: Yup.string()
      .min(5, "Group name must be 5 characters")
      .max(20,"Group name must be at most 20 characters")
      .required("Please Enter Group Name"),
    description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .max(80,"Description must be at most 80 characters")
      .required("Please Add Description"),
    terms: Yup.array(
      Yup.object({
        title: Yup.string()
          .min(5, "Term name should be 5 characters")
          .max(15, "Term name should be at most 15 characters")
          .required("Please Enter Term"),
        definition: Yup.string()
          .min(10, "Term definition shoud be 10 characters")
          .max( 100, "Defination should be at most 100 characters")
          .required("Please Enter Definition"),
      })
    ),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(
      addFlashcard({
        title: values.groupName,
        uploadImage: values.uploadimage,
        description: values.description,
        terms: values.terms,
        termsLength : values.terms.length
      })
    );
    resetForm();
    toast.success("👍 Flashcard Created!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="">
      <ToastContainer />
      <div className="w-4/5 m-auto bg-red-50 py-2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          
        >
          {({ values, setFieldValue }) => (

            <Form  >
              {/* for upper part img title and description  */}
              <div className="shadow-lg  bg-white rounded-md p-5 pl-12 py-7 ">

                {/* title and img in this div  */}
                <div className="flex flex-wrap ">


                {/*for label and title */}
                 <div   className="w-96 px-3 "> 
                     
                     <label
                       className="text-zinc-500 font-bold text-md"
                       htmlFor="groupName"
                     >
                       Group Name*
                     </label>
                    

                  <div>
                   <Field
                    type="text"
                    id="groupName"
                     name="groupName"
                     placeholder="Group Name"
                    className="appearance-none block w-full my-2 pl-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />

                    <ErrorMessage
                     name="groupName"
                     component="div"
                     className="text-red-500"
                    />
                   </div>
               </div>


                    {/* upload img div  */}
               <div className=" md:ml-5">
              
                  {values.uploadimage ? (
                    <div className=" ">
              
                      <img
                        className="h-16 w-full mt-2"
                        src={values.uploadimage}
                        alt=""
                      />
                      <TiDeleteOutline
                        className="text-3xl text-red-600"
                        onClick={() => setFieldValue("uploadimage", "")}
                      />
                    </div>
                  ) : (
                    <label
                      htmlFor="uploadimage"
                      className="w-40 h-[38px]  cursor-pointer px-3 mx-3 mt-8 py-1 bg-gray-200 border-gray-200 flex  items-center justify-center  rounded"
                    >
                      <FaFileUpload className=" text-[1.8em] text-blue-700 p-1" />  
                      <span className="text-blue-700 font-bold">
                        Upload Image
                      </span>
                    </label>
                  )}
 
                  <input
                    onChange={(event) => {
                      //  it's validation on image
                      if (
                        event.target.files[0] &&
                        !SUPPORTED_FORMATS.includes(event.target.files[0].type)
                      ) {
                        imgError("unsupported file format");
                      } else if (
                        event.target.files[0].size >
                        1024 * 1024 * 10
                      ) {
                        imgError("image size is very large");
                      } else if (
                        event.target.files[0].size <=
                        1024 * 1024 * 10
                      ) {
                        const file = event.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                          setFieldValue("uploadimage", reader.result);
                        };
                      }
                    }}
                    className="hidden"
                    name="uploadimage"
                    id="uploadimage"
                    type="file"
                  />
                </div>  

             </div>


              <div className="  w-full my-4 px-3">
                <label
                  className="text-zinc-500 mt-3 font-bold text-md"
                  htmlFor="description"
                >
                  
                  Add Description*
                </label>

                 

                <div>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="Write your thoughts here..."
                  className="w-9/12 h-20 pl-2 py-1 mt-2 bg-slate-200 font-normal rounded-md"
                />
                </div>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>
           </div> 




              <div className="m-auto pl-5 py-5 bg-white mt-5 shadow-md mb-10  rounded-md">
                <FieldArray
                  name="terms"
                  render={({ push, remove, form: { values, setFieldValue } }) => (
                    <TermCard
                      terms= {values.terms}
                      push= {push}
                      remove= {remove}
                      setFieldValue= {setFieldValue}
                    />
                  )}
                />
              </div>

              <div className="flex justify-center mb-10">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:from-green-500 hover:via-yellow-500 hover:to-red-500 text-white font-semibold py-1 px-4 rounded"
                >
                  Create
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateFlashCard;