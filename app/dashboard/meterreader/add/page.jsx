import { addmeterreader } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/meterreader/addmeterreader/addmeterreader.module.css";

const AddmeterreaderPage = () => {
  return (
    <div className={styles.container}>
      <form action={addmeterreader} className={styles.form}>
      <div className={styles.formGroup}>
          <label htmlFor="PurchaseOrderNumber">Purchase Order Number:</label>
          <input type="text" placeholder="Purchase Order Number" name="PurchaseOrderNumber" required />
       </div>
       <div className={styles.formGroup}>
          <label htmlFor="Meter Reading Unit">Meter Reading Unit:</label>
          <input type="text" placeholder="Meter Reading Unit" name="MeterReadingUnit" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="TaskNumber">Task Number:</label>
          <input type="text" placeholder="Task Number" name="TaskNumber" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="NumberOfMRUMeters">Number Of MRU Meters:</label>
          <input type="number" placeholder="Number Of MRU Meters" name="Number Of MRU Meters" required />
          </div>
          <div className={styles.formGroup}>
          <label htmlFor="MeterswithReads">Meters with Reads:</label>
          <input type="number" placeholder="Meters with Reads" name="MeterswithReads" required />
          </div>
          <div className={styles.formGroup}>
          <label htmlFor="MeterswithoutReads">Meters with Reads:</label>
          <input type="number" placeholder="Meters with out Reads" name="MeterswithoutReads" required />
          </div>
          <div className={styles.formGroup}>
          <label htmlFor="Status">Status:</label>
          <select name="Status" required>
          <option value="">Select Status</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        </div>
          <div className={styles.formGroup}>
          <label htmlFor="MRUUserAssigned">MRU User Assigned:</label>
          <input type="text" placeholder="MRU User Assigned" name="MRU User Assigned" required />
          </div>
        
        <div className={styles.formGroup}>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddmeterreaderPage;