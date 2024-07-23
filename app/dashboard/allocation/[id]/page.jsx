import { updateallocation } from "@/app/lib/actions";
import { fetchallocations } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/allocation/singleallocation/singleallocation.module.css";
import Image from "next/image";

const SingleallocationPage = async ({ params }) => {
  const { id } = params;
  const allocation = await fetchallocations(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {allocation.allocations}
      </div>
      <div className={styles.formContainer}>
        <form action={updateallocation} className={styles.form}>
          <input type="hidden" name="id" value={allocation.id} />
          <label>Name</label>
          <input type="text" name="Name" placeholder={allocation.Name} />
          <label>MeterReadingUnit</label>
          <input type="number" name="MeterReadingUnit" placeholder={allocation.MeterReadingUnit} />
         
         
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleallocationPage;