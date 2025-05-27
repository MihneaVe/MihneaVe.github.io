// Check if stylesheets loaded correctly
document.addEventListener('DOMContentLoaded', function() {
    const styles = document.styleSheets;
    let stylesLoaded = false;
    
    for (let i = 0; i < styles.length; i++) {
        try {
            // If we can access rules, the stylesheet loaded from the same origin
            const rules = styles[i].cssRules;
            if (rules && rules.length > 0) {
                stylesLoaded = true;
                console.log("Stylesheet loaded successfully:", styles[i].href);
            }
        } catch (e) {
            console.log("Could not access stylesheet:", styles[i].href);
        }
    }
    
    if (!stylesLoaded) {
        console.error("No stylesheets loaded successfully!");
        document.body.innerHTML = '<div style="padding: 20px; color: red; text-align: center;">⚠️ Stylesheet loading error. Please check the console.</div>' + document.body.innerHTML;
    }
});