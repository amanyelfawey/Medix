import { Input } from "@/components/ui/input";
import React from "react";

export default function ContactUs() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900" id="contact">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary dark:text-white">
            Contact <span className="text-secondary">Us</span>
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            for exceptional customer service, feedback or to learn more about our services.
          </p>

          <form className="space-y-8" action="" method="post">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-gray-500 dark:text-gray-300"
              >
                Your email
              </label>
              <Input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-500 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-md font-medium text-gray-500 dark:text-gray-300"
              >
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                className="block p-3 w-full text-md text-gray-500 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-md font-medium text-gray-500 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-md text-gray-500 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-md font-medium text-center text-white rounded bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  hover:bg-secondary "
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
