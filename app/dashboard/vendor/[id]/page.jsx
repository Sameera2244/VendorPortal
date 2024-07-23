import { updatevendor } from "@/app/lib/actions";
import { fetchVendors } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/vendor/singlevendor/singlevendor.module.css";
import Image from "next/image";

const SinglevendorPage = async ({ params }) => {
  const { id } = params;
  const vendor = await fetchVendors(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {vendor.VendorsName}
      </div>
      <div className={styles.formContainer}>
        <form action={updatevendor} className={styles.form}>
          <input type="hidden" name="id" value={vendor.id} />
          <label>Vendors Name</label>
          <input type="text" name="vendorsName" placeholder={vendor.VendorsName} />
          <label>Purchse Order Number</label>
          <input type="number" name="PurchaseOrderNumber" placeholder={user.PurchaseOrderNumber} />
          <label>No of MRU</label>
          <input type="number" name="NoOfMRU" placeholder={vendor.NoOfMRU} />
          <label>Vendors User</label>
          <input type="text" name="VendorUser" placeholder={vendor.VendorsUser} />
          <label>Vendors Assigned</label>
          <input type="text" name="VendorAssigned" placeholder={vendor.VendorAssigned} />
          <label>Status</label>
          <input type="text" name="Status" placeholder={vendor.Status} />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglevendorPage;