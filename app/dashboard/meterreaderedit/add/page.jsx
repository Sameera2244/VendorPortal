import { addmeterreaderedit } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/meterreaderedit/addmeterreaderedit/addmeterreaderedit.module.css";

const AddmeterreadereditPage = () => {
  return (
    <div className={styles.container}>
      <form action={addmeterreaderedit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="Name">Name:</label>
          <input type="text" placeholder="Name" name="Name" id="Name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="MeterReadingUnit">Meter Reading Unit:</label>
          <input type="number" placeholder="Meter Reading Unit" name="MeterReadingUnit" id="MeterReadingUnit" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="Date">Date:</label>
          <input type="number" placeholder="Date" name="Date" id="Date"  required />
        </div>


        <div className={styles.formGroup}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddmeterreadereditPage;