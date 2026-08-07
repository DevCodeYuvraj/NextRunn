"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    MdClose,
} from "react-icons/md";

import AvatarPicker from "@/components/common/AvatarPicker";

import styles from "./ContactFormModal.module.css";

const emptyContact = {
    image: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    department: "",
    website: "",
    address: "",
    city: "",
    country: "",
    notes: "",
    favourite: false,
};

export default function ContactFormModal({
    open,
    contact,
    onClose,
    onSave,
}) {
    const [form, setForm] =
        useState(emptyContact);

    useEffect(() => {
        if (contact) {
            setForm(contact);
        } else {
            setForm(emptyContact);
        }
    }, [contact]);

    if (!open) return null;

    const handleChange = (
        event
    ) => {
        const {
            name,
            value,
        } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (
        event
    ) => {
        event.preventDefault();

        if (
            !form.name ||
            !form.email
        )
            return;

        onSave(form);
    };

    return (
        <div
            className={styles.overlay}
            onMouseDown={(e) => {
                if (
                    e.target ===
                    e.currentTarget
                ) {
                    onClose();
                }
            }}
        >
            <div
                className={styles.modal}
            >
                <div
                    className={styles.header}
                >
                    <h2>
                        {contact
                            ? "Edit Contact"
                            : "Add Contact"}
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                    >
                        <MdClose />
                    </button>
                </div>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <div
                        className={
                            styles.avatarSection
                        }
                    >
                        <AvatarPicker
                            value={form.image}
                            onChange={(
                                avatar
                            ) =>
                                setForm(
                                    (
                                        prev
                                    ) => ({
                                        ...prev,
                                        image: avatar.id,
                                    })
                                )
                            }
                        />
                    </div>

                    <div
                        className={
                            styles.grid
                        }
                    >
                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Full Name
                            </label>

                            <input
                                name="name"
                                value={
                                    form.name
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={
                                    form.email
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Phone
                            </label>

                            <input
                                name="phone"
                                value={
                                    form.phone
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Company
                            </label>

                            <input
                                name="company"
                                value={
                                    form.company
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Position
                            </label>

                            <input
                                name="position"
                                value={
                                    form.position
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Department
                            </label>

                            <input
                                name="department"
                                value={
                                    form.department
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>            <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Website
                            </label>

                            <input
                                name="website"
                                value={
                                    form.website
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Address
                            </label>

                            <input
                                name="address"
                                value={
                                    form.address
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                City
                            </label>

                            <input
                                name="city"
                                value={
                                    form.city
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={
                                styles.field
                            }
                        >
                            <label>
                                Country
                            </label>

                            <input
                                name="country"
                                value={
                                    form.country
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>

                        <div
                            className={`${styles.field} ${styles.full}`}
                        >
                            <label>
                                Notes
                            </label>

                            <textarea
                                rows={5}
                                name="notes"
                                value={
                                    form.notes
                                }
                                onChange={
                                    handleChange
                                }
                            />
                        </div>
                    </div>

                    <div
                        className={
                            styles.footer
                        }
                    >
                        <button
                            type="button"
                            className={
                                styles.cancel
                            }
                            onClick={
                                onClose
                            }
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className={
                                styles.save
                            }
                        >
                            {contact
                                ? "Update Contact"
                                : "Add Contact"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}