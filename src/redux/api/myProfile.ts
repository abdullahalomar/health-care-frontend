import { IMeta } from "./../../types/common";
import { IDoctor } from "@/types/doctor";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyProfile: build.query({
      query: () => ({
        url: "user/me",
        method: "GET",
      }),

      providesTags: [tagTypes.user],
    }),

    updateMyProfile: build.mutation({
      query: (data) => ({
        url: "user/update-my-profile",
        method: "PATCH",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = profileApi;
