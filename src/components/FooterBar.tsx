import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { AutoFixHigh } from "@mui/icons-material";

export const FooterBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="primary"  sx={{top: "auto", bottom: 0 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <AutoFixHigh />
                    </IconButton>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                        意味のないフッターです
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};