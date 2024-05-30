import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/meterreaderedit/meterreaderedit.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchMeterreaderedits } from "@/app/lib/data";
import { deletemeterreaderedit } from "@/app/lib/actions";

const MeterreadereditsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, meterreaderedits } = await fetchMeterreaderedits(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a meterreaderedit..." />
        <Link href="/dashboard/meterreaderedit/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Meter Reading Unit</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {meterreaderedits.map((meterreaderedit) => (
            <tr key={meterreaderedit.id}>
              <td>
                <div className={styles.meterreaderedit}>
                  <Image
                    src={meterreaderedit.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.meterreadereditImage}
                  />
                  {meterreaderedit.Name}
                </div>
              </td>
             
              <td>{meterreaderedit.MeterReadingUnit}</td>
              <td>{meterreaderedit.Date}</td>
            

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/meterreaderedit/${meterreaderedit.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deletemeterreaderedit}>
                    <input type="hidden" name="id" value={meterreaderedit.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default MeterreadereditsPage;