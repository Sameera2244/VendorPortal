import { addvendor } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/vendor/addvendor/addvendor.module.css";

const AddvendorPage = () => {
  return (
    <div className={styles.container}>
      <form action={addvendor} className={styles.form}>
      <div className={styles.formGroup}>
      <label htmlFor="VendorsName">Vendors Name:</label>
      <input type="text" placeholder="Vendors Name" name="vendorsName" required />
      </div>
      <div className={styles.formGroup}>
          <label htmlFor="PurchaseOrderNumber">Purchase Order Number:</label>
        <input type="number" placeholder="Purchase Order Number" name="PurchaseOrderNumber" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="NumberOfMRUAssigned">Number Of MRU Assigned:</label>
        <input type="number" placeholder="Number Of MRU Assigned" name="Number Of MRU Assigned" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="VendorUser">Vendor User:</label>
        <input type="text" placeholder="Vendor User" name="VendorUser" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="VendorAssigned">Vendor Assigned:</label>
        <input type="text" placeholder="Vendor Assigned" name="VendorAssigned" required />
        </div>
        <div className={styles.formGroup}>
        <label htmlFor="Status">Status:</label>
        <select name="Status" required>
          <option value="">Select Status</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        </div>
        
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddvendorPage;