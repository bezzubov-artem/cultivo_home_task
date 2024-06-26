'use client'

import ExpertReportBanner from '@/components/ExpertReportBanner'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>

      <div className={styles.placeholder}>
        <ExpertReportBanner />
      </div>
    </main>
  )
}
