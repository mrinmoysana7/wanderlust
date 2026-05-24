"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

const DeleteModal = ({ destination }) => {
  // Module: 52.7
  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    _id,
    description,
  } = destination;

  const handleDelete = async () => {
    // Module: 52.7
    const res = await fetch(`http://localhost:5000/destination/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    redirect("/destinations");
    console.log(data);
  };
  return (
    // Module: 52.7
    <div>
      <AlertDialog>
        <Button
          variant="danger"
          className="bg-red-500 text-white border border-gray-300 transition-transform duration-400 hover:scale-110 shadow-md"
        >
          Delete Package
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-md">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete destination permanently ?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>{destinationName}</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteModal;
