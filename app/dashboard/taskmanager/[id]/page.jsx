import { updatetaskmanager } from "@/app/lib/actions";
import { fetchTaskManagers } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/taskmanager/singletaskmanager/singletaskmanager.module.css";
import Image from "next/image";

const SingletaskmanagerPage = async ({ params }) => {
  const { id } = params;
  const taskmanager = await fetchTaskManagers(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {taskmanager.PurchaseOrderNumber}
      </div>
      <div className={styles.formContainer}>
        <form action={updatetaskmanager} className={styles.form}>
          <input type="hidden" name="id" value={taskmanager.id} />
          <label>Purchase Order Number</label>
          <input type="number" name="PurchaseOrderNumber" placeholder={taskmanager.VendorsName} />
          <label>Meter Reading Unit</label>
          <input type="text" name="MeterReadingUnit" placeholder={taskmanager.MeterReadingUnit} />
          <label>Task Number</label>
          <input type="number" name="TaskNumber" placeholder={taskmanager.TaskNumber} />
          <label>Number Of Meters</label>
          <input type="number" name="NumberOfMeters" placeholder={taskmanager.NumberOfMeters} />
          <label>Meters with Reads</label>
          <input type="number" name="MeterswithReads" placeholder={taskmanager.MeterswithReads} />
          <label>Meters withOut Reads</label>
          <input type="number" name="MeterswithoutReads" placeholder={taskmanager.MeterswithoutReads} />
          <label>Status</label>
          <input type="text" name="Status" placeholder={taskmanager.Status} />
          <label>MRU User Assigned</label>
          <input type="text" name="MRU User Assigned" placeholder={taskmanager.MRUUserAssigned} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingletaskmanagerPage;