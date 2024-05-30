import { updatemeterreader } from "@/app/lib/actions";
import { fetchMeterreaders } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/meterreader/singlemeterreader/singlemeterreader.module.css";
import Image from "next/image";

const SinglemeterreaderPage = async ({ params }) => {
  const { id } = params;
  const meterreader = await fetchMeterreaders(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {meterreader.meterreaders}
      </div>
      <div className={styles.formContainer}>
        <form action={updatemeterreader} className={styles.form}>
          <input type="hidden" name="id" value={meterreader.id} />
          <label>Name</label>
          <input type="text" name="Name" placeholder={meterreader.Name} />
          <label>Id NO</label>
          <input type="number" name="IdNo" placeholder={meterreader.IdNO} />
         
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglemeterreaderPage;