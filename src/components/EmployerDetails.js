import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useForm, Controller, set } from "react-hook-form";
import Header from './header/Header';
import { Leftbar } from './sidebar/Leftbar';
import Footer from './footer/Footer';


const EmployerDetails = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }

    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            imageUrl: "",
            mobileNo: "",
            avgRating: "",
        }
    });
    
    return (
        <>
            <Header />
            <div className='grid lg:grid-cols-6'>
                <Leftbar />
                <Helmet>
                    <title>Driver List - Treklers - Admin</title>
                    <meta name="description" content="Login page" />
                </Helmet>
                <div className='p-8 lg:col-span-5 title-font'>
              
                    <div class ="pb-8 md:grid grid-cols-5 ">
                        <h2 class=" text-xl font-bold">Employer Details</h2>
                        <a href="/" class="font-bold cursor-pointer ">Home</a>
                    </div>
                    <form>
                    <div class="grid grid-cols-2 gap-8 ">
                        <div class="">
                        <lable>First Name :</lable>
                        <input type="text" required/>
                    </div>
                    <div class="">
                        <lable>Last Name :</lable>
                        <input type="text" required/>
                    </div>
                    <div class="">
                        <lable>Email :</lable>
                        <input type="text" required/>
                    </div>
                    <div class="">
                        <lable>Gender :</lable>
                        <input type="text" required/>
                    </div>
                    <div class="">
                        <lable>Image Url :</lable>
                        <input required/>
                    </div>
                    <div class="">
                        <lable>Mobile Number :</lable>
                        <input type="tel" required/>
                    </div>
                    <div class="">
                        <lable>Avg Rating :</lable>
                        <input required/>
                    </div>
                    </div>
                    <div class="flex justify-center pt-5 pb-10">
                    <button class=" bg-black py-1 px-3 rounded-md text-white hover:bg-gray-800">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
            
            
            <Footer />

        </>
    )
}

export default EmployerDetails


