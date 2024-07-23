import { addtaskmanager } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/taskmanager/addtaskmanager/addtaskmanager.module.css";

const AddtaskmanagerPage = () => {
  return (
    <div className={styles.container}>
      <form action={addtaskmanager} className={styles.form}>
      <input type="number" placeholder="Purchase Order Number" name="PurchaseOrderNumber" required />
      <input type="number" placeholder="Meter Reading Unit" name="MeterReadingUnit" required />
        <input type="number" placeholder="Task Number" name="TaskNumber" required />
        <input type="number" placeholder="Number Of Meters" name="Number Of MRU Meters" required />
        <input type="number" placeholder="Meters with Reads" name="MeterswithReads" required />
        <select name="Status" required>
          <option value="">Select Status</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <input type="number" placeholder="MRU User Assigned" name="MRU User Assigned" required />
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddtaskmanagerPage