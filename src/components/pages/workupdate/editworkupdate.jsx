import { TiArrowBack } from "react-icons/ti";
import { Link, useParams } from "react-router";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useaxiossecure";
import { useQuery } from "@tanstack/react-query";

const EditWorkupdate = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [date, setDate] = useState(new Date());

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const { data: singleReportData = [] } = useQuery({
    queryKey: ["singleReportData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reportById", {
        params: { id },
      });
      return res.data;
    },
    onSuccess: (data) => {
      reset({
        ...data,
        report_date: data?.report_date ? new Date(data.report_date) : null,
      });
    },
  });

  // const [date, setDate] = useState(singleReportData?.report_date);

  // console.log(singleReportData);
  // console.log("Single Report Data: ", singleReportData);

  // const [shopifyReview, setShopifyReview] = useState(
  //   singleReportData.shopify_app_review_get
  // );
  // const [wpPluginReview, setWpPluginReview] = useState(
  //   singleReportData.wporg_review_get
  // );
  // const [trustPilotReview, setTrustPilotReview] = useState(
  //   singleReportData.trustpilot_review_get
  // );

  // Sync state from singleReportData once it's loaded
  useEffect(() => {
    // setDate(singleReportData.report_date);
    // if (singleReportData?.shopify_app_review_get !== undefined) {
    //   setShopifyReview(singleReportData.shopify_app_review_get.toString());
    // }
    // if (singleReportData?.wporg_review_get !== undefined) {
    //   setWpPluginReview(singleReportData.wporg_review_get.toString());
    // }
    // if (singleReportData?.trustpilot_review_get !== undefined) {
    //   setTrustPilotReview(singleReportData.trustpilot_review_get.toString());
    // }
  }, [singleReportData]);

  const onSubmit = async (updateData) => {
    console.log("Submitted Updated data: ", updateData);
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-medium">
            <Link to="/workUpdate">
              <TiArrowBack className="w-5 h-5 cursor-pointer" />
            </Link>
            <span>Edit Work Update: {id}</span>
          </div>
        </div>

        {/* Edited Data */}
        <div>
          <form
            className="flex flex-col w-full"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <div className="custom-scrollbar h-[700px] overflow-y-auto px-2 py-4"> */}
            <div className="custom-scrollbar h-[300px] overflow-y-auto px-2 py-4">
              {/* <div className="flex flex-col gap-y-5"> */}
              <div className="grid grid-cols-2 gap-8">
                {/* Date Picker */}
                <div className="w-2/3 flex items-center gap-x-4 col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Select Date
                  </label>
                  <div className="relative">
                    <Controller
                      control={control}
                      name="report_date"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <DatePicker
                          selected={
                            field.value
                              ? new Date(field.value)
                              : singleReportData.report_date
                          }
                          onChange={(date) => field.onChange(date)}
                          dateFormat="dd-MM-yyyy"
                          placeholderText="dd-MM-yyyy"
                          maxDate={new Date()}
                          isClearable
                          className="border h-11 pl-10 pr-3 py-2 rounded text-sm focus:outline-none w-full"
                        />
                      )}
                    />

                    <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                  </div>
                  {errors.report_date?.type === "required" && isSubmitted && (
                    <p role="alert" className="text-red-500">
                      ** Date is required
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-end gap-6 px-2 mt-6 sm:flex-row sm:justify-end">
              <div className="flex items-center w-full gap-3 sm:w-auto">
                <button
                  type="button"
                  className="btn flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn flex justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                >
                  Update Info
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditWorkupdate;
