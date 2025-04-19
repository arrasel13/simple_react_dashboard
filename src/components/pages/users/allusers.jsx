import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import AddNewUser from "../../utils/modals/addNewUser";
import { FaUserPlus } from "react-icons/fa6";
import BreadCrumb from "../common/breadcrumb";

const AllUsers = () => {
  useEffect(() => {
    document.title = "All Users";
  }, []);

  return (
    <>
      <BreadCrumb bTitle="All Users" bText="All Users" />

      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ">
        {/* <div className="px-6 py-5">
          <h3 className="text-base font-medium text-gray-800 dark:text-white/90">
            Basic Table 2
          </h3>
        </div> */}
        {/* <div className="p-4 border-t border-gray-100 dark:border-gray-800 sm:p-6"> */}
        {/* <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="flex flex-col gap-4 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <button
                  className="btn btn-soft btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-3 text-theme-sm font-medium shadow-theme-xs hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                  onClick={() =>
                    document.getElementById("add_new_user").showModal()
                  }
                >
                  <FaUserPlus className="text-lg" />
                  Add User
                </button>
              </div>
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                <form>
                  <div class="relative">
                    <button class="absolute -translate-y-1/2 left-4 top-1/2">
                      <svg
                        class="fill-gray-500 dark:fill-gray-400"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z"
                          fill=""
                        ></path>
                      </svg>
                    </button>
                    <input
                      placeholder="Search..."
                      class="dark:bg-dark-900 h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[300px]"
                      type="text"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="max-w-full overflow-x-auto">
              <table className="min-w-full  undefined">
                <thead className="px-6 py-3.5 border-t border-gray-100 border-y bg-gray-50 dark:border-white/[0.05] dark:bg-gray-900">
                  <tr>
                    <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                      <div className="flex items-center gap-3">
                        <div>
                          <label className="flex items-center space-x-3 group cursor-pointer ">
                            <div className="relative w-5 h-5">
                              <input
                                className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60"
                                type="checkbox"
                              />
                            </div>
                          </label>
                        </div>
                        <div>
                          <span className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                            Deal ID
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                      Customer
                    </td>
                    <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                      Product/Service
                    </td>
                    <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                      Deal Value
                    </td>
                    <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                      Close Date
                    </td>
                    <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                      Status
                    </td>
                    <td className=" px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div>
                          <label className="flex items-center space-x-3 group cursor-pointer ">
                            <div className="relative w-5 h-5">
                              <input
                                className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60"
                                type="checkbox"
                              />
                            </div>
                          </label>
                        </div>
                        <div>
                          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                            DE124321
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-error-100 text-error-600">
                          <span className="text-sm font-medium">JD</span>
                        </div>
                        <div>
                          <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                            John Doe
                          </span>
                          <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                            johndoe@gmail.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        Software License
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        $18,50.34
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        2024-06-15
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        Complete
                      </span>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <button>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div>
                          <label className="flex items-center space-x-3 group cursor-pointer ">
                            <div className="relative w-5 h-5">
                              <input
                                className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60"
                                type="checkbox"
                              />
                            </div>
                          </label>
                        </div>
                        <div>
                          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                            DE124322
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                          <span className="text-sm font-medium">JS</span>
                        </div>
                        <div>
                          <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                            Jane Smith
                          </span>
                          <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                            janesmith@gmail.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        Cloud Hosting
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        $12,99.00
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        2024-06-18
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                        Pending
                      </span>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <button>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div>
                          <label className="flex items-center space-x-3 group cursor-pointer ">
                            <div className="relative w-5 h-5">
                              <input
                                className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60"
                                type="checkbox"
                              />
                            </div>
                          </label>
                        </div>
                        <div>
                          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                            DE124323
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                          <span className="text-sm font-medium">MB</span>
                        </div>
                        <div>
                          <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                            Michael Brown
                          </span>
                          <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                            michaelbrown@gmail.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        Web Domain
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        $9,50.00
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        2024-06-20
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500">
                        Cancel
                      </span>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <button>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div>
                          <label className="flex items-center space-x-3 group cursor-pointer ">
                            <div className="relative w-5 h-5">
                              <input
                                className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60"
                                type="checkbox"
                              />
                            </div>
                          </label>
                        </div>
                        <div>
                          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                            DE124324
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                          <span className="text-sm font-medium">AJ</span>
                        </div>
                        <div>
                          <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                            Alice Johnson
                          </span>
                          <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                            alicejohnson@gmail.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        SSL Certificate
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        $2,30.45
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        2024-06-25
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400">
                        Pending
                      </span>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <button>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div>
                          <label className="flex items-center space-x-3 group cursor-pointer ">
                            <div className="relative w-5 h-5">
                              <input
                                className="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60"
                                type="checkbox"
                              />
                            </div>
                          </label>
                        </div>
                        <div>
                          <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                            DE124325
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 w-10 h-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <span className="text-sm font-medium">RL</span>
                        </div>
                        <div>
                          <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                            Robert Lee
                          </span>
                          <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                            robertlee@gmail.com
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        Premium Support
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        $15,20.00
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                        2024-06-30
                      </p>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <span className="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                        Complete
                      </span>
                    </td>
                    <td className=" px-4 sm:px-6 py-3.5">
                      <button>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-700 cursor-pointer size-5 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
        {/* </div> */}

        {/* New data Table start */}
        <div className="space-y-6">
          {/* <div className="overflow-hidden  rounded-xl  bg-white  dark:bg-white/[0.03]"> */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/[0.05] dark:bg-white/[0.03]">
            {/* Table Head */}
            {/* <div class="flex flex-col gap-2 px-4 py-4 border border-b-0 border-gray-100 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between"> */}
            <div class="flex flex-col gap-2 px-4 py-4 border border-b-0 border-gray-100 dark:border-white/[0.05] rounded-t-xl sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-3">
                <span class="text-gray-500 dark:text-gray-400"> Show </span>
                <div class="relative z-20 bg-transparent">
                  <select class="w-full py-2 pl-3 pr-8 text-sm text-gray-800 bg-transparent border border-gray-300 rounded-lg appearance-none dark:bg-dark-900 h-9 bg-none shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800">
                    <option
                      value="10"
                      class="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                    >
                      10
                    </option>
                    <option
                      value="8"
                      class="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                    >
                      8
                    </option>
                    <option
                      value="5"
                      class="text-gray-500 dark:bg-gray-900 dark:text-gray-400"
                    >
                      5
                    </option>
                  </select>
                  <span class="absolute z-30 text-gray-500 -translate-y-1/2 right-2 top-1/2 dark:text-gray-400">
                    <svg
                      class="stroke-current"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.8335 5.9165L8.00016 10.0832L12.1668 5.9165"
                        stroke=""
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <span class="text-gray-500 dark:text-gray-400"> entries </span>
              </div>
              <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div class="relative">
                  <button class="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2 dark:text-gray-400">
                    <svg
                      class="fill-current"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.04199 9.37363C3.04199 5.87693 5.87735 3.04199 9.37533 3.04199C12.8733 3.04199 15.7087 5.87693 15.7087 9.37363C15.7087 12.8703 12.8733 15.7053 9.37533 15.7053C5.87735 15.7053 3.04199 12.8703 3.04199 9.37363ZM9.37533 1.54199C5.04926 1.54199 1.54199 5.04817 1.54199 9.37363C1.54199 13.6991 5.04926 17.2053 9.37533 17.2053C11.2676 17.2053 13.0032 16.5344 14.3572 15.4176L17.1773 18.238C17.4702 18.5309 17.945 18.5309 18.2379 18.238C18.5308 17.9451 18.5309 17.4703 18.238 17.1773L15.4182 14.3573C16.5367 13.0033 17.2087 11.2669 17.2087 9.37363C17.2087 5.04817 13.7014 1.54199 9.37533 1.54199Z"
                        fill=""
                      ></path>
                    </svg>
                  </button>
                  <input
                    x-model="search"
                    placeholder="Search..."
                    class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-11 pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[300px]"
                    type="text"
                  />
                </div>
                <button class="inline-flex items-center justify-center gap-2 rounded-lg transition  px-4 py-3 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 ">
                  Download
                  <svg
                    class="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0018 14.083C9.7866 14.083 9.59255 13.9924 9.45578 13.8472L5.61586 10.0097C5.32288 9.71688 5.32272 9.242 5.61552 8.94902C5.90832 8.65603 6.3832 8.65588 6.67618 8.94868L9.25182 11.5227L9.25182 3.33301C9.25182 2.91879 9.5876 2.58301 10.0018 2.58301C10.416 2.58301 10.7518 2.91879 10.7518 3.33301L10.7518 11.5193L13.3242 8.94866C13.6172 8.65587 14.0921 8.65604 14.3849 8.94903C14.6777 9.24203 14.6775 9.7169 14.3845 10.0097L10.5761 13.8154C10.4385 13.979 10.2323 14.083 10.0018 14.083ZM4.0835 13.333C4.0835 12.9188 3.74771 12.583 3.3335 12.583C2.91928 12.583 2.5835 12.9188 2.5835 13.333V15.1663C2.5835 16.409 3.59086 17.4163 4.8335 17.4163H15.1676C16.4102 17.4163 17.4176 16.409 17.4176 15.1663V13.333C17.4176 12.9188 17.0818 12.583 16.6676 12.583C16.2533 12.583 15.9176 12.9188 15.9176 13.333V15.1663C15.9176 15.5806 15.5818 15.9163 15.1676 15.9163H4.8335C4.41928 15.9163 4.0835 15.5806 4.0835 15.1663V13.333Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Table Body */}
            <div className="max-w-full overflow-x-auto custom-scrollbar">
              <div>
                <table className="min-w-full  undefined">
                  <thead>
                    <tr>
                      <th class=" px-4 py-3 border border-gray-100 dark:border-white/[0.05]">
                        <div class="flex items-center justify-between cursor-pointer">
                          <div class="flex gap-3">
                            <label class="flex items-center space-x-3 group cursor-pointer ">
                              <div class="relative w-5 h-5">
                                <input
                                  class="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60"
                                  type="checkbox"
                                />
                              </div>
                            </label>
                            <span class="font-medium text-gray-700 text-theme-xs dark:text-gray-400">
                              User
                            </span>
                          </div>
                          <button class="flex flex-col gap-0.5">
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </th>
                      <th class=" px-4 py-3 border border-gray-100 dark:border-white/[0.05]">
                        <div class="flex items-center justify-between cursor-pointer">
                          <p class="font-medium text-gray-700 text-theme-xs dark:text-gray-400">
                            Position
                          </p>
                          <button class="flex flex-col gap-0.5">
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </th>
                      <th class=" px-4 py-3 border border-gray-100 dark:border-white/[0.05]">
                        <div class="flex items-center justify-between cursor-pointer">
                          <p class="font-medium text-gray-700 text-theme-xs dark:text-gray-400">
                            Salary
                          </p>
                          <button class="flex flex-col gap-0.5">
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </th>
                      <th class=" px-4 py-3 border border-gray-100 dark:border-white/[0.05]">
                        <div class="flex items-center justify-between cursor-pointer">
                          <p class="font-medium text-gray-700 text-theme-xs dark:text-gray-400">
                            Office
                          </p>
                          <button class="flex flex-col gap-0.5">
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </th>
                      <th class=" px-4 py-3 border border-gray-100 dark:border-white/[0.05]">
                        <div class="flex items-center justify-between cursor-pointer">
                          <p class="font-medium text-gray-700 text-theme-xs dark:text-gray-400">
                            Status
                          </p>
                          <button class="flex flex-col gap-0.5">
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </th>
                      <th class=" px-4 py-3 border border-gray-100 dark:border-white/[0.05]">
                        <div class="flex items-center justify-between cursor-pointer">
                          <p class="font-medium text-gray-700 text-theme-xs dark:text-gray-400">
                            Action
                          </p>
                          <button class="flex flex-col gap-0.5">
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <svg
                              class="text-gray-300 dark:text-gray-700"
                              width="8"
                              height="5"
                              viewBox="0 0 8 5"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class=" px-4 py-4 border border-gray-100 dark:border-white/[0.05] dark:text-white/90 whitespace-nowrap">
                        <div class="flex gap-3">
                          <div class="mt-1">
                            <label class="flex items-center space-x-3 group cursor-pointer ">
                              <div class="relative w-5 h-5">
                                <input
                                  class="w-5 h-5 appearance-none cursor-pointer dark:border-gray-700 border border-gray-300 checked:border-transparent rounded-md checked:bg-brand-500 disabled:opacity-60
          "
                                  type="checkbox"
                                />
                              </div>
                            </label>
                          </div>
                          <div>
                            <p class="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                              Lindsey Curtis
                            </p>
                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                              demoemail@gmail.com
                            </span>
                          </div>
                        </div>
                      </td>
                      <td class=" px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-gray-400 whitespace-nowrap">
                        <span> Sales Assistant</span>
                      </td>
                      <td class=" px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-white/90 whitespace-nowrap">
                        $89,500
                      </td>
                      <td class=" px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-white/90 whitespace-nowrap">
                        Edinburgh
                      </td>
                      <td class=" px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-white/90 whitespace-nowrap">
                        <span class="inline-flex items-center px-2.5 py-0.5 justify-center gap-1 rounded-full font-medium text-theme-xs bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500">
                          Hired
                        </span>
                      </td>
                      <td class=" px-4 py-4 font-normal text-gray-800 border border-gray-100 dark:border-white/[0.05] text-theme-sm dark:text-white/90 whitespace-nowrap">
                        <div class="flex items-center w-full gap-2">
                          <button class="text-gray-500 hover:text-error-500 dark:text-gray-400 dark:hover:text-error-500">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="size-5"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.54142 3.7915C6.54142 2.54886 7.54878 1.5415 8.79142 1.5415H11.2081C12.4507 1.5415 13.4581 2.54886 13.4581 3.7915V4.0415H15.6252H16.666C17.0802 4.0415 17.416 4.37729 17.416 4.7915C17.416 5.20572 17.0802 5.5415 16.666 5.5415H16.3752V8.24638V13.2464V16.2082C16.3752 17.4508 15.3678 18.4582 14.1252 18.4582H5.87516C4.63252 18.4582 3.62516 17.4508 3.62516 16.2082V13.2464V8.24638V5.5415H3.3335C2.91928 5.5415 2.5835 5.20572 2.5835 4.7915C2.5835 4.37729 2.91928 4.0415 3.3335 4.0415H4.37516H6.54142V3.7915ZM14.8752 13.2464V8.24638V5.5415H13.4581H12.7081H7.29142H6.54142H5.12516V8.24638V13.2464V16.2082C5.12516 16.6224 5.46095 16.9582 5.87516 16.9582H14.1252C14.5394 16.9582 14.8752 16.6224 14.8752 16.2082V13.2464ZM8.04142 4.0415H11.9581V3.7915C11.9581 3.37729 11.6223 3.0415 11.2081 3.0415H8.79142C8.37721 3.0415 8.04142 3.37729 8.04142 3.7915V4.0415ZM8.3335 7.99984C8.74771 7.99984 9.0835 8.33562 9.0835 8.74984V13.7498C9.0835 14.1641 8.74771 14.4998 8.3335 14.4998C7.91928 14.4998 7.5835 14.1641 7.5835 13.7498V8.74984C7.5835 8.33562 7.91928 7.99984 8.3335 7.99984ZM12.4168 8.74984C12.4168 8.33562 12.081 7.99984 11.6668 7.99984C11.2526 7.99984 10.9168 8.33562 10.9168 8.74984V13.7498C10.9168 14.1641 11.2526 14.4998 11.6668 14.4998C12.081 14.4998 12.4168 14.1641 12.4168 13.7498V8.74984Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                          <button class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white/90">
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="size-5"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.0911 3.53206C16.2124 2.65338 14.7878 2.65338 13.9091 3.53206L5.6074 11.8337C5.29899 12.1421 5.08687 12.5335 4.99684 12.9603L4.26177 16.445C4.20943 16.6931 4.286 16.9508 4.46529 17.1301C4.64458 17.3094 4.90232 17.3859 5.15042 17.3336L8.63507 16.5985C9.06184 16.5085 9.45324 16.2964 9.76165 15.988L18.0633 7.68631C18.942 6.80763 18.942 5.38301 18.0633 4.50433L17.0911 3.53206ZM14.9697 4.59272C15.2626 4.29982 15.7375 4.29982 16.0304 4.59272L17.0027 5.56499C17.2956 5.85788 17.2956 6.33276 17.0027 6.62565L16.1043 7.52402L14.0714 5.49109L14.9697 4.59272ZM13.0107 6.55175L6.66806 12.8944C6.56526 12.9972 6.49455 13.1277 6.46454 13.2699L5.96704 15.6283L8.32547 15.1308C8.46772 15.1008 8.59819 15.0301 8.70099 14.9273L15.0436 8.58468L13.0107 6.55175Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table footer */}
            <div class="border border-t-0 rounded-b-xl border-gray-100 py-4 pl-[18px] pr-4 dark:border-white/[0.05]">
              <div class="flex flex-col xl:flex-row xl:items-center xl:justify-between">
                <div class="pb-3 xl:pb-0">
                  <p class="pb-3 text-sm font-medium text-center text-gray-500 border-b border-gray-100 dark:border-gray-800 dark:text-gray-400 xl:border-b-0 xl:pb-0 xl:text-left">
                    Showing 1 to 5 of 10 entries
                  </p>
                </div>
                <div class="flex items-center justify-center">
                  <button
                    disabled=""
                    class="mr-2.5 flex items-center h-10 justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-gray-700 shadow-theme-xs hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] text-sm"
                  >
                    Previous
                  </button>
                  <div class="flex items-center gap-2">
                    <button class="px-4 py-2 rounded bg-brand-500 text-white flex w-10 items-center justify-center h-10 rounded-lg text-sm font-medium hover:bg-blue-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500">
                      1
                    </button>
                    <button class="px-4 py-2 rounded text-gray-700 dark:text-gray-400 flex w-10 items-center justify-center h-10 rounded-lg text-sm font-medium hover:bg-blue-500/[0.08] hover:text-brand-500 dark:hover:text-brand-500">
                      2
                    </button>
                  </div>
                  <button class="ml-2.5 flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-gray-700 shadow-theme-xs text-sm hover:bg-gray-50 h-10 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03]">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dialog
        id="add_new_user"
        className="modal fixed inset-0 flex items-center justify-center overflow-y-auto modal z-99999"
      >
        <AddNewUser />
      </dialog>
    </>
  );
};

export default AllUsers;
