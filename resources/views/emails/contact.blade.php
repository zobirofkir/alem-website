<!DOCTYPE html>
<html>
<head>
    <title>{{ $contact->subject ?? 'New Contact Message' }}</title>
</head>
<body>
    <h1>{{ $contact->subject ?? 'New Contact Message' }}</h1>
    
    <p><strong>Name:</strong> {{ $contact->name ?? 'Not provided' }}</p>
    <p><strong>Email:</strong> {{ $contact->email ?? 'Not provided' }}</p>
    
    <div>
        <strong>Message:</strong>
        <p>{{ $contact->message ?? 'No message content' }}</p>
    </div>
    
    <p>This message was sent from your website contact form.</p>
</body>
</html>