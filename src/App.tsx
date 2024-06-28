import React, { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const App = () => {
  const [day, setDay] = useState<number | string>("");
  const [month, setMonth] = useState<number | string>("");
  const [year, setYear] = useState<number | string>("");

  const [ageYear, setAgeYear] = useState<number | string>("--");
  const [ageMonth, setAgeMonth] = useState<number | string>("--");
  const [ageDay, setAgeDay] = useState<number | string>("--");

  const handleChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };

  const handleChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const handleChangeThree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (day && month && year) {
      const birthDate = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day)
      );
      const currentDate = new Date();

      let age = currentDate.getFullYear() - birthDate.getFullYear();
      const monthDiff = currentDate.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      setAgeYear(age);
      setAgeMonth(monthDiff < 0 ? 12 + monthDiff : monthDiff);
      const dayDiff = currentDate.getDate() - birthDate.getDate();
      setAgeDay(
        dayDiff < 0
          ? new Date(
              currentDate.getFullYear(),
              currentDate.getMonth() - 1,
              0
            ).getDate() + dayDiff
          : dayDiff
      );
    }
  };

  return (
    <main className="flex items-center justify-center h-[100vh] bg-offWhite">
      <div className="bg-primaryWhite rounded-[1rem] py-[2rem] pl-[1rem] sm:pl-[2rem] pr-[1rem] sm:pr-[5rem] rounded-br-[8rem] relative">
        <form className="flex gap-[1rem]" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[0.2rem]">
            <label
              htmlFor="day"
              className="text-[0.6rem] font-bold text-smokeyGrey"
            >
              DAY
            </label>
            <input
              type="number"
              name="day"
              id="day"
              placeholder="DD"
              className="font-bold border-lightGrey border-[1px] p-[0.5rem] rounded-[0.3rem] w-[5rem] outline-none"
              max={31}
              min={1}
              value={day}
              onChange={handleChangeOne}
            />
          </div>
          <div className="flex flex-col gap-[0.2rem]">
            <label
              htmlFor="month"
              className="text-[0.6rem] font-bold text-smokeyGrey"
            >
              MONTH
            </label>
            <input
              type="number"
              name="month"
              id="month"
              placeholder="MM"
              className="font-bold border-lightGrey border-[1px] p-[0.5rem] rounded-[0.3rem] w-[5rem] outline-none"
              max={12}
              min={1}
              value={month}
              onChange={handleChangeTwo}
            />
          </div>
          <div className="flex flex-col gap-[0.2rem]">
            <label
              htmlFor="year"
              className="text-[0.6rem] font-bold text-smokeyGrey"
            >
              YEAR
            </label>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="YYYY"
              className="font-bold border-lightGrey border-[1px] p-[0.5rem] rounded-[0.3rem] w-[5rem] outline-none"
              max={new Date().getFullYear()}
              min={1920}
              value={year}
              onChange={handleChangeThree}
            />
          </div>
          <button
            className="bg-purple self-end p-[0.8rem] rounded-[50%] outline-none absolute transform -translate-x-1/2 sm:transform-none sm:self-end left-1/2 sm:left-auto sm:right-[1.5rem] top-[7rem] sm:top-[6rem]"
            type="submit"
          >
            <MdKeyboardDoubleArrowDown className="text-primaryWhite text-[2rem]" />
          </button>
        </form>
        <hr className="my-[3rem] sm:my-[2rem] sm:pr-[20rem]" />
        <div className="flex gap-[0.5rem]">
          <span className="text-[3rem] font-extrabold text-purple italic">
            {ageYear}
          </span>
          <span className="text-[3rem] font-extrabold italic">years</span>
        </div>
        <div className="flex gap-[0.5rem] mt-[-0.8rem]">
          <span className="text-[3rem] font-extrabold text-purple italic">
            {ageMonth}
          </span>
          <span className="text-[3rem] font-extrabold italic">months</span>
        </div>
        <div className="flex gap-[0.5rem] mt-[-0.8rem]">
          <span className="text-[3rem] font-extrabold text-purple italic">
            {ageDay}
          </span>
          <span className="text-[3rem] font-extrabold italic">days</span>
        </div>
      </div>
    </main>
  );
};

export default App;
