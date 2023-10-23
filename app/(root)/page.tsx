"use client";

import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    const onOpen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen])

    return (
        <div className="p-4">
            {/* <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
                Children
            </Modal> */}
            {/* Hello Admin */}
            <UserButton afterSignOutUrl="/"></UserButton>
        </div>
    )
}

export default SetupPage;