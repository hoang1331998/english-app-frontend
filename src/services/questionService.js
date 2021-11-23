import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../config/api/apiCaller";
import { ApiUrl } from "../config/api/apiConst";

export const fetchQuestions = async (successCallback, errorCallback) => {
  await getRequest(ApiUrl.questions, {}, successCallback, errorCallback);
};

export const createQuestion = async (
  params,
  successCallback,
  errorCallback
) => {
  await postRequest(ApiUrl.questions, params, successCallback, errorCallback);
};

export const removeCategories = async (
  categoryId,
  successCallback,
  errorCallback
) => {
  await deleteRequest(
    ApiUrl.categories + `/${categoryId}`,
    {},
    successCallback,
    errorCallback
  );
};

export const editCategories = async (
  params,
  successCallback,
  errorCallback
) => {
  await putRequest(
    ApiUrl.categories + `/${params.categoryId}`,
    params,
    successCallback,
    errorCallback
  );
};
