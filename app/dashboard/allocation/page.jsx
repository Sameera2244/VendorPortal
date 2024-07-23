import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/allocation/allocation.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchAllocations } from "@/app/lib/data";
import { deleteallocation } from "@/app/lib/actions";

const allocationsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, allocations } = await fetchAllocations(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a allocation..." />
        <Link href="/dashboard/allocation/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>MeterReadingUnit</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {allocations.map((allocation) => (
            <tr key={allocation.id}>
              <td>
                <div className={styles.allocation}>
                  <Image
                    src={allocation.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.vendorImage}
                  />
                  {allocation.Name}
                </div>
              </td>
              <td>{allocation.MeterReadingUnit}</td>
          

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/allocation/${allocation.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteallocation}>
                    <input type="hidden" name="id" value={allocation.id} />
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

export default allocationsPage;