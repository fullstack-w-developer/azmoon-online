import React from "react";
import LayoutScreen from "../../components/LayoutScreen";

const About = () => {
  return (
    <LayoutScreen>
      <div className="rtl">
        <h1 className="Extrabold text-center text-gray-700 text-2xl pt-8">
          درباره‌ی پروژه
        </h1>
        <div className="px-3 mt-10">
          <p className="text-gray-700 regular text-sm pt-3 text-justify">
            1- این پروژه با استفاده React, mongodb, express, Node.js که به
            اختصار Fullstack MERN گفته میشود، کدنویسی شده است .
          </p>
          <p className="text-gray-700 regular text-sm pt-3 text-justify">
            2- در قسمت فرانت از FunComponents و Hooks و CustomHooks و Contexts
            استفاده شده است.
          </p>
          <p className="text-gray-700 regular text-sm pt-3 text-justify">
            3- قسمت فرانت شامل شماره تلفن کاربر و کد تایید برای ورود به اپلیکیشن
            و ثبت نام مشخصات کاربر می باشد
          </p>
          <p className="text-gray-700 regular text-sm pt-3 text-justify">
            4- بعد از انجام فرایند بالا کاربر میتواند با شرکت در آزمون، آزمونی
            را برای خود برای خود انتخاب کرده و سپس در منوی زیری در بخش آزمون های
            من، آزمون های انتخاب شده توسط خود را مشاهده نمایید.
          </p>
          <p className="text-gray-700 regular text-sm pt-3 text-justify">
            5- پس از انتخاب آزمون و فرا رسیدن زمان آزمون دکمه شرکت در آزمون فعال
            میشود و سوالات از سمت سرور گرفته شده و برای کاربر نمایش داده میشود .
          </p>
          <p className="text-gray-700 regular text-sm pt-3 text-justify">
            6- قسمت فرانت تا اینجا کار شده و بقیه‌ی امکانات اپلیکیشن مانند:
            سوالات ذخیره شده و کارنامه و .. کار نشده است.
          </p>
        </div>
      </div>
    </LayoutScreen>
  );
};

export default About;
