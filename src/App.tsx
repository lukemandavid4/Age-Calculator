import { useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const App = () => {
  const [day, setDay] = useState("--");
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [ageDay, setAgeDay] = useState("--");
  const [ageMonth, setAgeMonth] = useState("--");
  const [ageYear, setAgeYear] = useState("--");

  const handleChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };
  const handleChangeTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };
  const handleChangeThree = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAgeYear(currentYear - year);
    setAgeMonth(currentMonth - month);
    setAgeDay(currentDay - day);
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
              max={2024}
              min={1920}
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
