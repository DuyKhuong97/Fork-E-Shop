// import { useMutation, useQueryClient } from 'react-query';
// import http from '@framework/utils/http';
// import { API_ENDPOINTS } from '@framework/utils/api-endpoints';

// export interface CategoryID {
//   ID: string;
// }

// export const deleteID = async (id: CategoryID) => {
//   await http.delete(`${API_ENDPOINTS.CATEGORIES, id}`);
// };

// export const useDeleteID = () => {
//   const queryClient = useQueryClient();

//   const deleteIDMutation = useMutation(deleteID, {
//     onSuccess: (id) => {
//       queryClient.invalidateQueries([API_ENDPOINTS.CATEGORIES, { id }]);
//     },
//     onError: (id)  => {
//       console.log(id, "login error response");
//     },
//   });

//   return {
//     deleteID: deleteIDMutation.mutate,
//   };
// };
// import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation, useQueryClient } from "react-query";

export interface CategoryID {
  id: number;
}
async function deleteCategory(input: CategoryID) {
  return http.delete(API_ENDPOINTS.CATEGORY, input).then((res) => {
    return res;
  });
}
export const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation((input: CategoryID) => deleteCategory(input), {
    onSuccess: (_data) => {
      queryClient.invalidateQueries([API_ENDPOINTS.CATEGORIES, _data]);
      console.log("Success");
    },
    onError: (data) => {
      console.log(data, "Delete error");
    },
  });

  return mutation;
};

