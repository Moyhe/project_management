import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/Constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Project } from "@/types/project";
import { QueryParams } from "@/types/queryParams";
import { Head, Link, router } from "@inertiajs/react";

interface Props {
    projects: Project;
    queryParams: QueryParams;
}

const index = ({ projects, queryParams }: Props) => {
    queryParams = queryParams || {};
    const searchFiledInput = (
        name: keyof typeof queryParams,
        value: string
    ) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("project.index"), queryParams as {});
    };

    const search = (name: keyof typeof queryParams, event: any) => {
        if (event.key !== "Enter") return;

        searchFiledInput(name, event.target.value);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3">ID</th>
                                            <th className="px-3 py-3">Image</th>
                                            <th className="px-3 py-3">Name</th>
                                            <th className="px-3 py-3">
                                                status
                                            </th>
                                            <th className="px-3 py-3">
                                                Created Date
                                            </th>
                                            <th className="px-3 py-3">
                                                Created By
                                            </th>
                                            <th className="px-3 py-3">
                                                Due Date
                                            </th>

                                            <th className="px-3 py-3 text-right">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                                <TextInput
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    className="w-full"
                                                    placeholder="Project Name"
                                                    onBlur={(event) =>
                                                        searchFiledInput(
                                                            "name",
                                                            event.target.value
                                                        )
                                                    }
                                                    onKeyUp={(event) =>
                                                        search("name", event)
                                                    }
                                                />
                                            </th>
                                            <th className="px-3 py-3">
                                                <SelectInput
                                                    defaultValue={
                                                        queryParams.status
                                                    }
                                                    onChange={(event) =>
                                                        searchFiledInput(
                                                            "status",
                                                            event.target.value
                                                        )
                                                    }
                                                    className="w-full cursor-pointer"
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="pending">
                                                        Pending
                                                    </option>
                                                    <option value="in_progress">
                                                        In Progress
                                                    </option>
                                                    <option value="completed">
                                                        Completed
                                                    </option>
                                                </SelectInput>
                                            </th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.data.map((project) => (
                                            <tr
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                key={project.id}
                                            >
                                                <td className="px-3 py-2">
                                                    {project.id}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <img
                                                        src={project.image}
                                                        style={{ width: 60 }}
                                                    />
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.name}
                                                </td>
                                                <td className="px-3 py-2">
                                                    <span
                                                        className={
                                                            "px-2 py-1 rounded text-white " +
                                                            PROJECT_STATUS_CLASS_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            PROJECT_STATUS_TEXT_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {project.created_at}
                                                </td>
                                                <td className="px-3 py-2">
                                                    {project.createdBy.name}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {project.due_date}
                                                </td>

                                                <td className="px-3 py-2 text-nowrap">
                                                    <Link
                                                        href={route(
                                                            "project.edit",
                                                            project.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "project.edit",
                                                            project.id
                                                        )}
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default index;
