import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { StatusReportQuery } from "../../../common/model/StatusReportQuery";
import { getStatusReport } from "../../../redux/actions/statusReport";
import { getStatusReportSelector } from "../../../redux/selectors/statusReport";

export const useStatusReportsData = () => useSelector(getStatusReportSelector); 

export const useFetchStatusReport = (): StatusReportQuery[] => {
  const dispatch = useDispatch();
  const reportData = useStatusReportsData();

  useEffect(()=>{
    dispatch(getStatusReport());
  },[dispatch]) 

  return reportData;
};