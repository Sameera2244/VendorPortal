import { addmeterreader } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/meterreader/addmeterreader/addmeterreader.module.css";

const AddmeterreaderPage = () => {
  return (
    <div className={styles.container}>
      <form action={addmeterreader} className={styles.form}>
      <div className={styles.formGroup}>
          <label htmlFor="MeterreadingUnit">Meter Reading Unit:</label>
        <input type="text" placeholder="Meter Reading Unit" name="MeterReadingUnit" required />
       </div>
       <div className={styles.formGroup}>
          <label htmlFor="FirstName">First Name:</label>
        <input type="text" placeholder="First Name" name="FirstName" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="LastName">LastName:</label>
        <input type="text" placeholder="LastName" name="LastName" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="MREfficency">Installation:</label>
        <input type="text" placeholder="MREfficency" name="MREfficency" required />
        </div>
        
        <div className={styles.formGroup}>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddmeterreaderPage;