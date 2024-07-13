import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";

interface Props {
    name: string;
    sortable?: boolean;
    sort_field: string;
    sort_direction: string;
    children: ReactNode;
    sortChanged: (name: string) => void;
}

const TableHeading = ({
    name,
    sortable = true,
    sort_direction,
    sort_field,
    children,
    sortChanged,
}: Props) => {
    return (
        <th onClick={(e) => sortChanged(name)}>
            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={
                                "w-4 " +
                                (sort_field === name && sort_direction === "asc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 -mt-2 " +
                                (sort_field === name &&
                                sort_direction === "desc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
};

export default TableHeading;
