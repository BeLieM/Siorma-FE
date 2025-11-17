"use client";

import AddButton from "@/components/_shared/AddButton";
import SearchBox from "@/components/_shared/SearchBox";
import {Pagination} from "@/components/ui/pagination";
import { useState, useEffect } from "react";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserDialog } from "@/components/core/user-dialog";
import { DeleteUserDialog } from "@/components/core/delete-user-dialog";
// import {
//   useGetAllUsers,
//   useAddUserMutation,
//   useEditUserMutation,
//   useDeleteUserMutation,
// } from "@/hooks/user.hooks";
// import { ROLE } from "@/utils/constants";
import { DashboardHeader } from "@/components/_shared/header/DashboardHeader";

// ROLE lokal sementara, nanti bisa pakai import dari utils/constants
const ROLE = {
  ADMIN: "ADMIN",
  ORGANIZER: "ORGANIZER",
};

// Dummy data sementara
const DUMMY_USERS = [
  {
    id: 1,
    fullname: "Daniswara",
    email: "Daniswara@gmail.com",
    role: ROLE.ADMIN,
  },
  {
    id: 2,
    fullname: "Billy",
    email: "Billy@gmail.com",
    role: ROLE.ORGANIZER,
  },
];

export default function UsersPage() {
  // ==== STATE UNTUK DUMMY DATA ====
  const [users, setUsers] = useState(DUMMY_USERS);
  const [isLoading, setIsLoading] = useState(false);

  // ==== JIKA SUDAH PAKAI API, BUKA COMMENT INI ====
  // const { users, isLoading, refetch } = useGetAllUsers();
  // const { addUserMutation } = useAddUserMutation({ successAction: refetch });
  // const { editUserMutation } = useEditUserMutation({ successAction: refetch });
  // const { deleteUserMutation } = useDeleteUserMutation({
  //   successAction: () => {
  //     setIsDeleteDialogOpen(false);
  //     setSelectedUser(null);
  //     refetch();
  //   },
  // });

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Filter + search berdasarkan state users (dummy)
  useEffect(() => {
    if (users && Array.isArray(users)) {
      const filtered = users.filter(
        (user) =>
          user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
      setCurrentPage(1);
    }
  }, [users, searchTerm]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleSaveUser = (userData) => {
    // ==== VERSI DUMMY TANPA API ====
    if (isEditing && selectedUser?.id) {
      // Edit di state lokal
      setUsers((prev) =>
        prev.map((u) =>
          u.id === selectedUser.id
            ? {
                ...u,
                ...userData,
              }
            : u
        )
      );
    } else {
      // Tambah user baru di state lokal
      setUsers((prev) => {
        const maxId = prev.length > 0 ? Math.max(...prev.map((u) => u.id)) : 0;
        return [
          ...prev,
          {
            id: maxId + 1,
            ...userData,
          },
        ];
      });
    }

    // ==== VERSI API (buka kalau backend ready) ====
    // if (isEditing && selectedUser?.id) {
    //   editUserMutation.mutate({ userId: selectedUser.id, payload: userData });
    // } else {
    //   addUserMutation.mutate({ payload: userData });
    // }

    setSelectedUser(null);
    setIsEditing(false);
    setIsUserDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    if (!selectedUser?.id) return;

    // ==== VERSI DUMMY TANPA API ====
    setUsers((prev) => prev.filter((u) => u.id !== selectedUser.id));
    setIsDeleteDialogOpen(false);
    setSelectedUser(null);

    // ==== VERSI API (buka kalau backend ready) ====
    // deleteUserMutation.mutate({ userId: selectedUser.id });
  };

  return (
    <>
      <DashboardHeader title="Manajemen User" />
      <main className="md:p-5 p-3 bg-[#f5e4e4] min-h-screen md:space-y-5 space-y-3">
        <Card className="w-full gap-3 bg-[#f9dede] border border-[#f3b5b5]">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-[#3b1111]">
                  Kelola Data User
                </CardTitle>
                <CardDescription className="text-[#8c4b4b]">
                  Daftar user yang tersimpan
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <AddButton
                  onClick={() => {
                    setSelectedUser(null);
                    setIsEditing(false);
                    setIsUserDialogOpen(true);
                  }}
                >
                  Add User
                </AddButton>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="mb-4">
              <SearchBox
                value={searchTerm}
                onChange={(value) => setSearchTerm(value)}
                placeholder="Search by name, email or role..."
                className="bg-[#f4aaaa] border-[#f19494] text-[#4b1a1a] placeholder:text-[#f8d1d1]"
              />
            </div>

            <div className="rounded-xl border border-[#f3b5b5] overflow-hidden bg-[#fbe1e1]">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#f7b5b5]">
                    <TableHead className="text-[#5b1a1a] font-semibold">
                      Nama
                    </TableHead>
                    <TableHead className="text-[#5b1a1a] font-semibold">
                      Email
                    </TableHead>
                    <TableHead className="text-[#5b1a1a] font-semibold">
                      Role
                    </TableHead>
                    <TableHead className="text-right text-[#5b1a1a] font-semibold">
                      Aksi
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {isLoading && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-6">
                        Loading...
                      </TableCell>
                    </TableRow>
                  )}

                  {!isLoading &&
                    currentUsers.map((user, index) => (
                      <TableRow
                        key={user.id}
                        className={`${
                          index % 2 === 0 ? "bg-[#fce5e5]" : "bg-[#fbe1e1]"
                        } border-t border-[#f3b5b5]`}
                      >
                        <TableCell className="text-[#4b1a1a]">
                          {user.fullname}
                        </TableCell>
                        <TableCell className="text-[#4b1a1a]">
                          {user.email}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                              user.role === ROLE.ADMIN
                                ? "bg-[#66c47b]"
                                : "bg-[#ffb347]"
                            }`}
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-[#ffe7e7]"
                              >
                                <MoreHorizontal className="text-[#b63636]" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="bg-[#ffe5e5] border-[#f3b5b5]"
                            >
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedUser(user);
                                  setIsEditing(true);
                                  setIsUserDialogOpen(true);
                                }}
                              >
                                <Pencil className="mr-2 h-4 w-4 text-[#b63636]" />
                                Edit
                              </DropdownMenuItem>

                              {user.role !== ROLE.ADMIN && (
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => {
                                    setSelectedUser(user);
                                    setIsDeleteDialogOpen(true);
                                  }}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}

                  {!isLoading && currentUsers.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="py-6 text-center text-sm text-[#8c4b4b]"
                      >
                        Tidak ada user yang cocok dengan pencarian.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="mt-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </CardContent>
        </Card>

        <UserDialog
          open={isUserDialogOpen}
          onOpenChange={(open) => {
            if (!open) {
              setIsUserDialogOpen(false);
              setSelectedUser(null);
              setIsEditing(false);
            }
          }}
          user={selectedUser}
          isEditing={isEditing}
          onSave={handleSaveUser}
        />

        <DeleteUserDialog
          open={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          user={selectedUser}
          onConfirm={handleConfirmDelete}
        />
      </main>
    </>
  );
}
