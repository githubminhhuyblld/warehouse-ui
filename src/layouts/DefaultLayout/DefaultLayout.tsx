import {FC, ReactNode, useState} from 'react';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";


import Header from "~/layouts/components/Header/Header.tsx";

// import Footer from "~/layouts/components/Footer/Footer.tsx";


interface DefaultLayoutStylesProps {
    children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutStylesProps> = ({children}) => {

    const [open, setOpen] = useState(0);
    const [openAlert, setOpenAlert] = useState(true);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    return <>
        <header className='header'>
            <Header/>
        </header>
        <aside className='content grid grid-cols-12 gap-4'>
            <section className="hidden xl:block xl:col-span-2">
                <Card className="h-[calc(100vh-2rem)]   w-full rounded-none p-2 shadow-blue-gray-900/5 mt-1 ">
                    <List className="min-w-[210px]">
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={` h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                                />
                            }
                        >
                            <ListItem className="p-0" selected={open === 1}>
                                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <PresentationChartBarIcon className="h-5 w-5"/>
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        Dashboard
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                        </ListItemPrefix>
                                        Analytics
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                        </ListItemPrefix>
                                        Reporting
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                        </ListItemPrefix>
                                        Projects
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 2}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                />
                            }
                        >
                            <ListItem className="p-0" selected={open === 2}>
                                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                    <ListItemPrefix>
                                        <ShoppingBagIcon className="h-5 w-5"/>
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal">
                                        E-Commerce
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                        </ListItemPrefix>
                                        Orders
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5"/>
                                        </ListItemPrefix>
                                        Products
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <hr className="my-2 border-blue-gray-50"/>
                        <ListItem>
                            <ListItemPrefix>
                                <InboxIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            Inbox
                            <ListItemSuffix>
                                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full"/>
                            </ListItemSuffix>
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            Profile
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            Settings
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5"/>
                            </ListItemPrefix>
                            Log Out
                        </ListItem>
                    </List>
                    <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                        <CubeTransparentIcon className="mb-4 h-12 w-12"/>
                        <Typography variant="h6" className="mb-1">
                            Upgrade to PRO
                        </Typography>
                        <Typography variant="small" className="font-normal opacity-80">
                            Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                            and premium.
                        </Typography>
                        <div className="mt-4 flex gap-3">
                            <Typography
                                as="a"
                                href="#"
                                variant="small"
                                className="font-medium opacity-80"
                                onClick={() => setOpenAlert(false)}
                            >
                                Dismiss
                            </Typography>
                            <Typography as="a" href="#" variant="small" className="font-medium">
                                Upgrade Now
                            </Typography>
                        </div>
                    </Alert>
                </Card>
            </section>
            <section className="lg:col-span-12 xl:col-span-10 md:col-span-12 sm:col-span-12 col-span-12">
                {children}
            </section>
        </aside>
        <footer className='footer'>
            {/*<Footer/>*/}
        </footer>
    </>;
};

export default DefaultLayout;