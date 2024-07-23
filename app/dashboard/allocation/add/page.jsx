import { addallocation } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/allocation/addallocation/addallocation.module.css";

const AddallocationPage = () => {
  return (
    <div className={styles.container}>
      <form action={addallocation} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="Name">Name:</label>
          <input type="text" placeholder="Name" name="Name" id="Name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="MeterReadingUnit">Meter Reading Unit:</label>
          <input type="number" placeholder="MeterReadingUnit" name="MeterReadingUnit" id="MeterReadingUnit" required />
        </div>
       


        <div className={styles.formGroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddallocationPage;