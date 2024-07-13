import TasksTable from "@/Components/TasksTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { QueryParams } from "@/types/queryParams";
import { Task } from "@/types/task";
import { Head } from "@inertiajs/react";

interface Props {
    tasks: Task;
    queryParams: QueryParams;
}

const index = ({ tasks, queryParams }: Props) => {
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
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TasksTable
                                hide={false}
                                tasks={tasks}
                                queryParams={queryParams}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default index;
