import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();
  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        {" "}
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              open={isEditOpen}
              title={` ویرایش  ${project.title}`}
              onClose={() => setIsEditOpen(false)}
            >
              this is modal
            </Modal>
          </>
          <>
            <button onClick={() => setIsOpenDelete(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              open={isOpenDelete}
              title={` حذف ${project.title}`}
              onClose={() => setIsOpenDelete(false)}
            >
              <ConfirmDelete
                onClose={() => setIsOpenDelete(false)}
                resourceName={project.title}
                disabled={false}
                onConfirm={() => removeProject(project._id)}
              />
            </Modal>
          </>
        </div>
      </td>
      <td></td>
    </Table.Row>
  );
}

export default ProjectRow;
