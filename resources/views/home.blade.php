@extends('layouts.app')

@section('content')
    <section>
        <form action="POST" href="/get-data">
            <button class="" type="submit">Receber dados</button>
        </form>
    </section>
@endsection
