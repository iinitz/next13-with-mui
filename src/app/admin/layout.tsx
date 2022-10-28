import AdminMenu from './AdminMenu'

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <main>
    <AdminMenu />
    {children}
  </main>
)

export default AdminLayout
