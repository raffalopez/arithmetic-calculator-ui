import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Table, { StatusPill } from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { userRecord } from "../../features/record/records.Slices";
import { record } from "../../api/record";
import { ReactComponent as Trash } from "../../assets/trash.svg";

const Balance = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const { dataRecord } = useSelector((state: any) => state.records);
  const [deleted, setDeleted] = useState<boolean>(false);

  const getRecordUser = async () => {
    const records = (await record.UserRecord(`record/${user?.recordId}`)) || [];
    dispatch(userRecord(records));
  };

  useEffect(() => {
    getRecordUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleted]);

  const getData = () => {
    const data = dataRecord?.operation || [];
    return [...data];
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleted(true);
        record.RemoveOperation(`operations/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Cost",
        accessor: "cost",
      },
      {
        Header: "Response",
        accessor: "operationResponse",
        Cell: StatusPill,
      },
      {
        Header: "Action",
        Cell: ({ cell }: any) => (
          <button onClick={() => handleDelete(cell?.row?.original?.id)}>
            <Trash className="trash" />
          </button>
        ),
      },
    ],
    []
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = React.useMemo(() => getData(), [dataRecord]);

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-6">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Balance;
